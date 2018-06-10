/*
 * Copyright 2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.gradle.nativeplatform.test.xctest.internal;

import org.gradle.api.artifacts.Configuration;
import org.gradle.api.artifacts.ConfigurationContainer;
import org.gradle.api.file.ConfigurableFileCollection;
import org.gradle.api.file.FileCollection;
import org.gradle.api.file.ProjectLayout;
import org.gradle.api.file.RegularFile;
import org.gradle.api.file.RegularFileProperty;
import org.gradle.api.internal.file.FileOperations;
import org.gradle.api.model.ObjectFactory;
import org.gradle.api.provider.Property;
import org.gradle.api.provider.Provider;
import org.gradle.language.nativeplatform.internal.ConfigurableComponentWithExecutable;
import org.gradle.language.swift.SwiftPlatform;
import org.gradle.nativeplatform.tasks.InstallExecutable;
import org.gradle.nativeplatform.tasks.LinkExecutable;
import org.gradle.nativeplatform.test.xctest.SwiftXCTestExecutable;
import org.gradle.nativeplatform.toolchain.internal.NativeToolChainInternal;
import org.gradle.nativeplatform.toolchain.internal.PlatformToolProvider;

import javax.inject.Inject;

public class DefaultSwiftXCTestExecutable extends DefaultSwiftXCTestBinary implements SwiftXCTestExecutable, ConfigurableComponentWithExecutable {
    private final Property<LinkExecutable> linkTask;
    private final Property<InstallExecutable> installTask;
    private final ConfigurableFileCollection files;
    private final RegularFileProperty debuggerExecutableFile;

    @Inject
    public DefaultSwiftXCTestExecutable(String name, ProjectLayout projectLayout, ObjectFactory objectFactory, Provider<String> module, boolean debuggable, boolean optimized, boolean testable, FileCollection source, FileOperations fileOperations, ConfigurationContainer configurations, Configuration implementation, SwiftPlatform targetPlatform, NativeToolChainInternal toolChain, PlatformToolProvider platformToolProvider) {
        super(name, projectLayout, objectFactory, module, debuggable, optimized, testable, source, configurations, implementation, targetPlatform, toolChain, platformToolProvider);
        debuggerExecutableFile = projectLayout.fileProperty();
        linkTask = objectFactory.property(LinkExecutable.class);
        installTask = objectFactory.property(InstallExecutable.class);
        files = fileOperations.files();
    }

    @Override
    public Property<RegularFile> getDebuggerExecutableFile() {
        return debuggerExecutableFile;
    }

    @Override
    public Property<LinkExecutable> getLinkTask() {
        return linkTask;
    }

    @Override
    public Property<InstallExecutable> getInstallTask() {
        return installTask;
    }

    @Override
    public ConfigurableFileCollection getOutputs() {
        return files;
    }
}
